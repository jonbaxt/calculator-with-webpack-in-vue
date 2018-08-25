<template>
    <div id='topBoard' >
        <div id='topBoard-currcalc'>
        <p id='topBoard-pTag'>{{ displayMessage() }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['num1Store', 'num2Store', 'operatorStore', 'finalSolutionStore'],
    data() {
        return {
            num1Item: this.num1Store,
            num2Item: this.num2Store,
        }
    },
    methods: {
        displayMessage() {
            if(this.operatorStore === ''){
                return '';
            } else if(this.num2Store === 0 && this.finalSolutionStore === 0){
                return this.num1Store + ' ' + this.operatorStore;
            } else {
                return this.num1Store + ' ' + this.operatorStore + ' ' + this.num2Store + ' = ' + this.finalSolutionStore;
            }
        }
    }
}
</script>

<style>
    #topBoard {
        width: 300px;
        height: 55px;
        overflow: auto;
        background: lightblue;
    }
    #topBoard-pTag {
            text-align: right;
            margin-right: 25px;
    }
    #topBoard-currcalc {
            width: 99%;
    }

</style>
