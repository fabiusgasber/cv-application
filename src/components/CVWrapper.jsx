import "../styles/cv.css"

const CVWrapper = ({ data, title }) => {
    return (
    <div className="cv-wrapper" aria-label={title ? title + " cv preview" : "personal info cv preview" } tabIndex={0}>
        {title && <div><h2>{title}</h2></div>}
        {data.map(form => 
           <ul className={form.form} key={form.id} tabIndex={0}>{Object.entries(form).map(([key, value], index) => 
            key !== "id" && key !== "form" ? <li tabIndex={0} key={index} className={key}>{value}</li> : null
           )}</ul>
        )}
    </div>
    )
} 

export default CVWrapper;