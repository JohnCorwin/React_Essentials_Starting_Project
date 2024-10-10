import { useState } from 'react';

import { EXAMPLES } from '../../data';
import TabButton from '../tabButton/TabButton';

import './Examples.css';

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return (<section id="examples">
        <h2>Examples</h2>
        <menu>
        {
            Object.keys(EXAMPLES).map((key) => {
            return <TabButton
                key={key}
                isSelected={selectedTopic===key}
                onSelect={() => handleSelect(key)}
            >
                {EXAMPLES[key].title}
            </TabButton>
            })
        }
        </menu>
        {
        !selectedTopic ? <p>Please select a topic.</p> :
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3><p>{EXAMPLES[selectedTopic].description}</p><pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
        </div>
        }
    </section>);
}

export default Examples;