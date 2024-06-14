import {Box} from "@mui/material";
import TreeItem from "./TreeItem.tsx";
import SaveFile from "Types/SaveFile.ts";

interface IProps {
    saveFile: SaveFile;
}

const SaveFileTreeView = (props: IProps) => {
    return <Box>
        <TreeItem scope={props.saveFile.rootScope} startExpanded/>
    </Box>
}

export default SaveFileTreeView;