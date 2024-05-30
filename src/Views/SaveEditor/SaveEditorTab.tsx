import {useState} from "react";
import {ISaveFile} from "./SaveFile.ts";
import {SaveFileUtil} from "./SaveFileUtil.ts";
import {FileUploadForm} from "../../Components/FileUploadForm.tsx";
import {Alert, Snackbar} from "@mui/material";

export const SaveEditorTab = () => {
    const [saveFile, setSaveFile] = useState<ISaveFile>();
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

    return (<>
        {!saveFile && <FileUploadForm onFileUploaded={onFileUploaded} buttonText="Upload savefile" accepts=".eu4"/>}
        <Snackbar open={!!error} autoHideDuration={10_000} onClick={() => setError(null)}>
            <Alert onClick={() => setError(null)} severity="error">
                {error}
            </Alert>
        </Snackbar>
    </>)
}