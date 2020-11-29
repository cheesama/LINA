import * as React from "react";
import { Admin, Resource } from 'react-admin';

import { IntentList } from './meta-intents'
import { EntityList } from './meta-entities'
import { UtteranceList } from './intent-entity-utterances'

import simpleRestProvider from 'ra-strapi-rest';

console.log(process.env.META_ENDPOINT);
const dataProvider = simpleRestProvider(process.env.META_ENDPOINT);

const App = () => 
    <Admin dataProvider={dataProvider}>
        <Resource name="meta-intents" list={IntentList} />
        <Resource name="meta-entities" list={EntityList} />
        <Resource name="nlu-intent-entity-utterances" list={UtteranceList} />
    </Admin>

export default App;
