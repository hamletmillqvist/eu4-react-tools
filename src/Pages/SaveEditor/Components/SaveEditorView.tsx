import {useState} from "react";
import {Alert, Box, Snackbar} from "@mui/material";
import {SaveFile} from "../SaveFile.ts";
import {SaveFileUtil} from "../SaveFileUtil.ts";
import {FileUploadForm} from "../../../Components/FileUploadForm.tsx";
import SaveFileTreeView from "./SaveFileTreeView.tsx";

const SaveEditorView = () => {
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
    };

    return (<>
        {!saveFile && <FileUploadForm onFileUploaded={onFileUploaded}
                                      buttonText="Upload savefile"
                                      accepts=".eu4"/>}
        <Snackbar open={!!error}
                  autoHideDuration={10_000}
                  onClick={() => setError(null)}>
            <Alert onClick={() => setError(null)} severity="error">
                {error}
            </Alert>
        </Snackbar>

        {saveFile &&
            <>
                <Box sx={{display: "flex", gap: 8}}>

                    <Box sx={{flex: 1}}>
                        <SaveFileTreeView saveFile={saveFile}/>
                    </Box>
                    <Box sx={{flex: 1}}>
                        <p>Lorem ipsum dolor sit amet</p>

                    </Box>
                </Box>
            </>
        }
    </>)
}

export default SaveEditorView;