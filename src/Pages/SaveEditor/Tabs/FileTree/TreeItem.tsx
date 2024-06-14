import {useState} from "react";
import {Box} from "@mui/material";
import {AddBox, Remove} from "@mui/icons-material";
import Scope from "Types/Scope.ts";
import ScopeVariable from "Types/ScopeVariable.ts";
import ScopeVariableContainer from "./ScopedVariableContainer.tsx";

interface ITreeItemProps {
    scope: Scope;
    startExpanded?: boolean;
}

const TreeItem = ({scope, startExpanded}: ITreeItemProps) => {

    const [isExpanded, setIsExpanded] = useState(startExpanded ?? false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const onScopeVariableSaved = (variable: ScopeVariable) => {
        scope.setVariable(variable.name, variable.value);
    };

    return <Box sx={{marginLeft: scope.depth}}>
        <Box sx={{display: "flex"}}>
            {isExpanded
                ? <Remove onClick={toggleExpanded}/>
                : <AddBox onClick={toggleExpanded}/>}
            {scope.name}
        </Box>
        {isExpanded && <Box>
            {scope.getVariables()?.map((variable, i) =>
                <ScopeVariableContainer key={i}
                                        variable={variable}
                                        onSave={onScopeVariableSaved}/>
            )}
            {scope.childScopes?.map((child, i) =>
                <Box key={i}>
                    <TreeItem scope={child}/>
                </Box>
            )}
        </Box>}
    </Box>
}

export default TreeItem;