import React from 'react'
import './PortfolioList.scss'


const PortfolioList = ({title, active, setSelected, id}) => {
    return (
        <li className={active ? "protfoliolist active" : "protfoliolist"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
