import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('ListContainer component', function() {
    it('Renders the container that holds holds the lists of cards', function() {
        const text = "I am Text";
        const title = "Container Title";
        const cards = ["peaches", "cream"];
        const index = "1";
        const list = [{text: "text 1", cards: cards}, {text: "text 2", cards: cards},
                      {text: "text 3", cards: cards}];

        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer  title={title} />
                       );
                        const result = renderer.getRenderOutput();
        result.props.className.should.equal('list-container');
        result.props.children.type.should.be.a('function');
        console.log(result.props.children.props);
        result.props.children.props.cards.should.be.a('array');
        result.props.children.props.submitHandler.should.be.a('function');
        result.props.children.props.changeHandler.should.be.a('function');
        result.props.children.props.title.should.equal(title);
    })
})
