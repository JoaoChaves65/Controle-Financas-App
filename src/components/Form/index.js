import React, { useState } from 'react';
// import * as C from './styles';

const Form = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }
    };

    return (
        <>
            <div>
                <div>
                    <label>Descrição</label>
                    <input
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div>
                    <label>Valor</label>
                    <input
                        value={amount}
                        type="number"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />
                    <label htmlFor="rIncome">Entrada</label>
                    <input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />
                    <label htmlFor="rExpenses">Saída</label>
                </div>
                <button onClick={handleSave}>Adicionar</button>
            </div>
        </>
    );
};

export default Form;