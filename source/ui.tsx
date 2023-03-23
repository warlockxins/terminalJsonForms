import React, { FC } from 'react';
import { Box } from 'ink';
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json';
import { vanillaCells, vanillaRenderers } from './cliRenderers';
import baseData from './baseData.json';
import { LeftPanel } from './LeftPanel';
import InteractiveComponents from './InteractiveComponents';

const App: FC<{ name?: string }> = () => {
	const [data, setData] = React.useState<unknown | undefined>(baseData[0]);

	return <Box>
		<LeftPanel />
		<InteractiveComponents
			onSelected={setData}
		/>

		<JsonForms
			schema={schema}
			data={data}
			renderers={vanillaRenderers}
			cells={vanillaCells}
			onChange={({ data }) => setData(data)}
		/>

	</Box>
};

module.exports = App;
export default App;
