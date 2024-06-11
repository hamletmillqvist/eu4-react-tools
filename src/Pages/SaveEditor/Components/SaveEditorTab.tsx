import {useState} from "react";
import {SaveFile} from "../SaveFile.ts";
import {SaveFileUtil} from "../SaveFileUtil.ts";
import {FileUploadForm} from "../../../Components/FileUploadForm.tsx";
import {Alert, Box, Snackbar} from "@mui/material";
import SaveFileTreeView from "./SaveFileTreeView.tsx";

interface IProps {
    onTabNameChanged: (name: string) => void;
}

export const SaveEditorTab = (props: IProps) => {
    const [saveFile, setSaveFile] = useState<SaveFile>();
    const [error, setError] = useState<string | null>(null);

    const onFileUploaded = async (file: File) => {
        const parseResult = await SaveFileUtil.parse(file);

        if (parseResult.errorText) {
            setError(parseResult.errorText);
            return false;
        }

        setError(null);
        setSaveFile(parseResult.saveFile);

        const saveName = parseResult.saveFile?.name.slice(0, parseResult.saveFile?.name.length - ".eu4".length);
        if (saveName != null) {
            props.onTabNameChanged(saveName);
        } else {
            props.onTabNameChanged("Unknown")
        }
    }

    return (<>
        {!saveFile && <FileUploadForm onFileUploaded={onFileUploaded} buttonText="Upload savefile" accepts=".eu4"/>}
        <Snackbar open={!!error} autoHideDuration={10_000} onClick={() => setError(null)}>
            <Alert onClick={() => setError(null)} severity="error">
                {error}
            </Alert>
        </Snackbar>

        {saveFile &&
            <Box sx={{display: "flex"}}>
                <SaveFileTreeView saveFile={saveFile}/>
                <Box>
                    Lorem ipsum dolor sit amet
                </Box>
            </Box>
        }
    </>)
}