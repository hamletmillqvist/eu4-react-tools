import {Box, Button} from "@mui/material";
import {Loop, UploadFile} from "@mui/icons-material";
import {ChangeEvent, createRef, useState} from "react";

interface IProps {
    buttonText?: string;
    onFileUploaded: (file: File) => Promise<boolean | void>;
    accepts?: string;
}

interface IFileMetadata {
    name: string;
    size: number;
    type: string;
}

export const FileUploadForm = (props: IProps) => {

    const [fileMetadata, setFileMetadata] = useState<IFileMetadata | null>();
    const [isLoading, setIsLoading] = useState(false);
    const fileInput = createRef<HTMLInputElement>();

    const onUploadClick = () => {
        fileInput.current?.click();
    }

    const onChanged = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);

        if (!file) {
            setFileMetadata(null);
            return;
        }

        setIsLoading(true);
        setFileMetadata({
            name: file.name,
            size: file.size,
            type: file.type,
        });

        if (await props.onFileUploaded(file) === false) {
            event.target.value = "";
            setFileMetadata(null);
        }

        setIsLoading(false);
    }

    return (
        <Box>
            <input ref={fileInput} type="file" hidden accept={props.accepts} onChange={onChanged}/>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                startIcon={isLoading ? <Loop/> : <UploadFile/>}
                onClick={onUploadClick}>
                {fileMetadata?.name ?? props.buttonText ?? "Upload file"}
            </Button>
            {props.accepts &&
                <div className="secondary-text">Filetype ({props.accepts})</div>
            }
        </Box>
    )
}