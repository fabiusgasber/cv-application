import "../styles/cv.css"

const CVWrapper = ({ data, title }) => {
    return (
    <div className="cv-wrapper">
        {title ? <div><h2>{title}</h2></div> : ""}
        {data.map(form => 
        <>
           <ul className={form.form} key={form.id}>{Object.entries(form).map(([key, value], index) => 
            key !== "id" && key !== "form" ? <li key={index} className={key}>{value}</li> : ""
           )}</ul>
        </>
        )}
    </div>
    )
} 

export default CVWrapper;