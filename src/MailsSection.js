import React from 'react'
import './MailsSection.css'

function MailsSection({Icon, title, selected, color}) {
    return (
        <div className={`mailsSection ${selected && "mailsSection--selected"}`}
            style = {{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`,
            }}>
                <Icon/>
                <h4>{title}</h4>
        </div>
    )
}

export default MailsSection
