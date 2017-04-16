import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
    it('Renders a card', function() {
        const text = "I am text";
        const id = 1;

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} id={id}/>
                       );
                        const result = renderer.getRenderOutput();
        result.props.className.should.equal('cards');

        const card = result.props.children;
        card.type.should.equal('div');
        card.props.className.should.equal('card-text');
        card.props.children.should.equal(text);
    });
});
