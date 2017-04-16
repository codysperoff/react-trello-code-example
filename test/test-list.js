import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();
import CardList from '../js/components/list';

describe('List component', function() {
    it('Renders a list of cards', function() {
        const text = "I am Text";
        const title = "List Title";
        const cards = ["peaches", "cream"];
        const index = "1";
        const list = [{text: "text 1", cards: cards}, {text: "text 2", cards: cards},
                      {text: "text 3", cards: cards}];

        const renderer = TestUtils.createRenderer();
        renderer.render(<CardList text={text} cards={cards} index={index} />
                       );
                        const result = renderer.getRenderOutput();
        result.props.className.should.equal("card-list");

        const listOne = result.props.children[0];
        listOne.type.should.equal('div');
        listOne.props.className.should.equal("list-title");

        const listTwo = result.props.children[1];
        listTwo.type.should.equal('div');
        listTwo.props.className.should.equal("card-contents");

        const listThree = result.props.children[2];
        listThree.type.should.equal('form');
        listThree.props.children[0].type.should.equal('input');
        listThree.props.children[1].type.should.equal('button');
    });
});
