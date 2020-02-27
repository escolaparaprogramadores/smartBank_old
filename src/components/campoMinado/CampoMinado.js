import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import params from './params';
import Padrao from '../../estilo/Padrao';
import MineField from './MineField';
import {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
} from './logic';

export default class Jogo extends Component {
    constructor(props) {
        super(props);
        this.state = this.createState();
    }

    minesAmount = () => {
        const cols = params.getColumsAmount();
        const rows = params.getRowsAmount();
        return Math.ceil(cols * rows * params.difficultLevel);
    };

    createState = () => {
        const cols = params.getColumsAmount();
        const rows = params.getRowsAmount();
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false,
        };
    };

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board);
        openField(board, row, column);
        const lost = hadExplosion(board);
        const won = wonGame(board);

        if (lost) {
            showMines(board);
            Alert.alert('Perdeeeeu!', 'Que buuuurro!');
        }

        if (won) {
            Alert.alert('Parabéns', 'Você Venceu!');
        }

        this.setState({ board, lost, won });
    };

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board);
        invertFlag(board, row, column);
        const won = wonGame(board);

        if (won) {
            Alert.alert('Parabéns', 'Você Venceu!');
        }

        this.setState({ board, won });
    };

    onLevelSelected = level => {
        params.difficultLevel = level;
        this.setState(this.createState());
    };

    render() {
        return (
            <View style={Padrao.container}>
                <Text style={Padrao.ex}>Iniciando Mines!!!</Text>
                <Text style={Padrao.ex}>
                    Tamanho da grade:
                    {params.getRowsAmount()}*{params.getColumsAmount()}
                </Text>
                <View style={styles.board}>
                    <MineField
                        board={this.state.board}
                        onOpenField={this.onOpenField}
                        onSelectField={this.onSelectField}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#AAAA',
    },
});
