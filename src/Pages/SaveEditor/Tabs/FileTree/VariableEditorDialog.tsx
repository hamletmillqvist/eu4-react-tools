import {Box, Button, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import ScopeVariable from "Types/ScopeVariable.ts";

interface IProps {
    open: boolean;
    variable: ScopeVariable;
    onClose: () => void;
    onSave: (variable: ScopeVariable) => void;
}

const VariableEditorDialog = (props: IProps) => {

    const [variable, setVariable] = useState<ScopeVariable>(ScopeVariable.clone(props.variable));

    useEffect(() => {
        if (props.open) {
            setVariable(ScopeVariable.clone(props.variable));
        }
    }, [props.open]);
    
    const onSaveClick = () => {
        props.onSave(variable);
    }

    const onValueChanged = (value: string) => {
        const newVariable = ScopeVariable.clone(variable);
        newVariable.value = value;
        setVariable(newVariable);
    };
    
    return (
        <Dialog open={props.open}
                onClose={props.onClose}
                fullWidth>
            <DialogTitle>Editing {variable.evaluatedName}</DialogTitle>
            <DialogContent>
                <table className="dialog-table">
                    <tbody>
                    <tr>
                        <td className="bold">Name</td>
                        <td>{variable.name}</td>
                    </tr>
                    <tr>
                        <td className="bold">Value</td>
                        <td>
                            <TextField value={variable.value} onChange={e => onValueChanged(e.target.value)}/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <Box sx={{marginTop: 4, float: "right"}}>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button onClick={onSaveClick}>Save</Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default VariableEditorDialog;