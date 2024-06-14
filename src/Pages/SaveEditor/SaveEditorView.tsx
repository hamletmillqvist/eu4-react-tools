import {useMemo, useState} from "react";
import {Box, Button} from "@mui/material";
import SaveFile from "Types/SaveFile.ts";
import SaveFileUtil from "Utils/SaveFileUtil.ts";
import FileUploadForm from "Components/FileUploadForm.tsx";
import SaveFileTreeView from "./Tabs/FileTree/SaveFileTreeView.tsx";
import Alerter from "Utils/Alerter.ts";

const SaveEditorView = () => {
    const [saveFile, setSaveFile] = useState<SaveFile>();

    const onFileUploaded = async (file: File) => {
        const parseResult = await SaveFileUtil.parse(file);

        if (parseResult.errorText) {
            Alerter.showError(parseResult.errorText);
            return false;
        }

        setSaveFile(parseResult.saveFile);
    }

    const saveName = useMemo(() => {
        return saveFile?.name.slice(0, saveFile?.name.length - ".eu4".length);
    }, [saveFile]);

    const onSaveClick = () => {
        // todo: generate save file and download
        Alerter.showError("This feature is not yet implemented");
    };

    return (<Box>
        {!saveFile && <FileUploadForm onFileUploaded={onFileUploaded}
                                      buttonText="Upload savefile"
                                      accepts=".eu4"/>}
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
    </Box>)
}

export default SaveEditorView;