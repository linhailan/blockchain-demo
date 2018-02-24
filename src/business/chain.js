import Block from 'business/block';

class Chain {
    constructor(blocks) {
        if (blocks) {
            this.blocks = blocks;
            this.prevBlock = blocks[blocks.length - 1];
        } else {
            this.blocks = [];
            const block = new Block('Genesis Block', 'hello_block_chain');
            while (!block.validDiffculty()) {
                block.calcHash();
            }
            this.blocks.push(block);
        }
    }

    isValidBlock(block) {
        const prev = this.prevBlock;
        return block.validDiffculty() &&
            prev.hash === block.prevHash &&
            prev.index === block.index - 1;
    }

    lastBlock() {
        return this.blocks[this.blocks.length - 1];
    }

    accept(block) {
        if (this.isValidBlock(block)) {
            this.prevBlock = block;
            this.blocks.push(this.prevBlock);
        } else {
            throw new Error('conflict block happend');
        }
    }

    print() {
        this.blocks.forEach(b => void console.log(b));
    }
}

export default Chain;
