import React from 'react'

export default props => {
  return (
    <div className={`zygoteRow`}>
      <form action="" className="zygoteForm">
        {props.yourPayment.additionalFields.sections.map((section, i) => {
          return (
            <div className="zygoteSection" key={i}>
              <div className="zygoteSectionTitle">{section.title}</div>
              {section.fields.map((field, i) => {
                return props.renderField('updateAddress', field, i, props.user)
              })}
            </div>
          )
        })}
      </form>
    </div>
  )
}
