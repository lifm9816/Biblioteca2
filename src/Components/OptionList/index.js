import styled from "styled-components"

const Select = styled.select`
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 30px;
    margin-top:10px;
    width: auto;
    outline: none;

    @media(min-width: 930px)
    {
        width: -webkit-fill-available;
        margin-right: 35px;
    }
`

const OptionList = (props) => {
    
    const handleChange = (e) => {
        props.updateValue(e.target.value);
    }

    return (
        <Select 
            id = {props.id} 
            value = {props.value}
            onChange={ handleChange } 
        >
            <option value = "" disabled defaultValue= "" hidden> </option>
            {
                props.brands && props.brands.map((marca, index) => <option key={index} value={marca}> {marca} </option>)
            }
        </Select>
    )
}

export default OptionList;