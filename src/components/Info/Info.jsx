

const Info = (title, desc, demoLink, gitLink) => {
    <>
        <div className="info">
            <h2 className="info_project-title">{title}</h2>
            <p className="info_project-desc">{desc}</p>
            <img src="" alt="" className="info_project-img" />
            <img src="" alt="" className="info_project-img" />

            <button><a href={demoLink}>VISITE DEMO</a></button>
            <button><a href={gitLink}>PROJECT GIT</a></button>
            <button><a href="">BACK TO CV</a></button>
        </div>
    </>
}

export default Info;