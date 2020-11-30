import * as React from "react";
import { List, Datagrid, TextField, ArrayField, FunctionField, ChipField, ReferenceField } from 'react-admin';

export const UtteranceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="utterance" />
            <FunctionField label="Intent" render={record => `${record.intent_id.Intent_ID}`} />
            <ArrayField source="entities">
                <Datagrid>
                    <TextField source="entity" />
                    <TextField source="start" />
                    <TextField source="end" />
                </Datagrid>
            </ArrayField>
            <ChipField source="data_type" />
        </Datagrid>
    </List>
);
