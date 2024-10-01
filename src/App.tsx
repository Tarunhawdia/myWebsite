import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <h1>Tarun Hawdia</h1>
        </div>
        <div className="inside-container">
          <div className="sidebar">
            <ul>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          <div className="section_main">
            <section id="about" className="section">
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
                ullam, dolores ex delectus non quia voluptatem possimus, eaque
                eius sapiente laudantium? Veniam hic labore, voluptatibus
                similique perferendis magni tempore doloremque, nisi beatae iste
                alias. Non ratione numquam deserunt exercitationem iusto
                incidunt fuga nostrum id dolorem officia placeat, error quia sed
                quae necessitatibus dicta aliquid ea nobis. Laborum enim itaque
                molestias quis iure temporibus eaque rem soluta, ad odio nihil,
                sunt repudiandae provident vel! Expedita mollitia vitae ipsum
                optio explicabo ex quos porro illo, atque sunt reprehenderit
                libero placeat vero vel voluptates modi, velit nam culpa
                consequuntur nulla. Libero, deleniti.
              </p>
            </section>

            <section id="projects" className="section">
              <h2>Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit
                ullam, dolores ex delectus non quia voluptatem possimus, eaque
                eius sapiente laudantium? Veniam hic labore, voluptatibus
                similique perferendis magni tempore doloremque, nisi beatae iste
                alias. Non ratione numquam deserunt exercitationem iusto
                incidunt fuga nostrum id dolorem officia placeat, error quia sed
                quae necessitatibus dicta aliquid ea nobis. Laborum enim itaque
                molestias quis iure temporibus eaque rem soluta, ad odio nihil,
                sunt repudiandae provident vel! Expedita mollitia vitae ipsum
                optio explicabo ex quos porro illo, atque sunt reprehenderit
                libero placeat vero vel voluptates modi, velit nam culpa
                consequuntur nulla. Libero, deleniti.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
