export default function Stylesheet() {
    return (
        <article>
            <h1>Header 1</h1>
            <h2 style={{textAlign:'center'}}>Header 2</h2>
            <h3 style={{textAlign:'center'}}>Header 3</h3>
            <h4 style={{textAlign:'center'}}>Header 4</h4>
            <h5 style={{textAlign:'center'}}>Header 5</h5>
            <h6 style={{textAlign:'center'}}>Header 6</h6>
            <p>Lorem ipsum</p>
            <h1>Color Palette</h1>
            <h2>Primary</h2>
            <h6>Have 1-3 primary colors</h6>
            <section>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
            </section>
            <h2>Secondary</h2>
            <h6>Add one lighter and one darker shade per primary color</h6>
            <section>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
            </section>
            <h2>Accents</h2>
            <h6>Include ~3 accent colors</h6>
            <section>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
            </section>
            <h2>Neutral Colors</h2>
            <h6>Use 2 light colors with good contrast</h6>
            <section>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#444444'}}>
                    <h4>Name</h4>
                    <p>#XXXXXX</p>
                </div>
                <div className="color-swatch" style={{backgroundColor:'#ffffff'}}>
                    <h4>White</h4>
                    <p>#ffffff</p>
                </div>
            </section>
            
        </article>
    )
}