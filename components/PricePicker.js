import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function PricePicker(props) {

    return (
        <FormControl>
            <FormLabel>Amount</FormLabel>
            <Select 
            value={props.amount}
            onChange={props.handleAmount}>
                <option value={props.web3.utils.toWei('1', 'ether')}>1 MATIC</option>
                <option value={props.web3.utils.toWei('10', 'ether')}>10 MATIC</option>
                <option value={props.web3.utils.toWei('100', 'ether')}>100 MATIC</option>
                <option value={props.web3.utils.toWei('1000', 'ether')}>1000 MATIC</option>
                <option value={props.web3.utils.toWei('10000', 'ether')}>10000 MATIC</option>
                <option value={props.web3.utils.toWei('100000', 'ether')}>100000 MATIC</option>
            </Select>
        </FormControl>
    )
}