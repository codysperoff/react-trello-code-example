import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
    it('Renders the board that contains the list container', function() {
        const text = "I am Text";
        const title = "Board Title";
        const cards = ["peaches", "cream"];
        const index = "1";
        const list = [{text: "text 1", cards: cards}, {text: "text 2", cards: cards},
                      {text: "text 3", cards: cards}];

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} />
                       )
                        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board')
        result.type.should.equal('div');

        const container = result.props.children[0];
        container.type.should.equal('div');
        container.props.className.should.equal('board-title');
        container.props.children.should.equal('Board Title');

        const listFunctionOne = result.props.children[1];
        listFunctionOne.type.should.be.a('function');
        listFunctionOne.props.title.should.equal('Card List');
    })
})
