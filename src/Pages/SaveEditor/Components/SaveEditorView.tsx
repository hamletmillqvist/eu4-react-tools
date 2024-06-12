import {useMemo, useState} from "react";
import {Alert, Box, Button, Snackbar} from "@mui/material";
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
    }

    const saveName = useMemo(() => {
        return saveFile?.name.slice(0, saveFile?.name.length - ".eu4".length);
    }, [saveFile]);

    const onSaveClick = () => {
        // todo: generate save file and download
        setError("This feature is not yet implemented");
    };

    return (<>
        {!saveFile && <FileUploadForm onFileUploaded={onFileUploaded}
                                      buttonText="Upload savefile"
                                      accepts=".eu4"/>}
        <Snackbar open={!!error}
                  autoHideDuration={10_000}
                  sx={{width: "100%"}}
                  onClick={() => setError(null)}>
            <Alert onClick={() => setError(null)}
                   sx={{width: "100%"}}
                   severity="error">
                {error}
            </Alert>
        </Snackbar>

        {saveFile &&
            <>
                <Box>
                    <Box sx={{float: "right"}}>
                        <Button variant="contained" onClick={onSaveClick}>Save</Button>
                    </Box>
                    <h1>{saveName}</h1>
                </Box>
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