export default function Stylesheet() {
    return (
        <article>
            <div className="hero-section">
                <h1>Stylesheet</h1>
                <p>Lorem ipsum</p>
            </div>
            <div className="content">
                <h1>Color Palette</h1>
                <h2>Primary</h2>
                <h6>1-3 primary colors is ideal</h6>
                <section>
                    <div className="color-swatch" style={{backgroundColor:'#0c234b'}}>
                        <h4>AZ Blue</h4>
                        <p>#0c234b</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#ab0520'}}>
                        <h4>AZ Red</h4>
                        <p>#ab0520</p>
                    </div>
                </section>
                <h2>Secondary</h2>
                <h6>Add one lighter and one darker shade per primary color</h6>
                <section>
                    <div className="color-swatch" style={{backgroundColor:'#03132e'}}>
                        <h4>Tinta</h4>
                        <p>#03132e</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#1e5288'}}>
                        <h4>Azurite</h4>
                        <p>#1e5288</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#106ab1'}}>
                        <h4>Arroyo Blue</h4>
                        <p>#106ab1</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#81ceeb'}}>
                        <h4>Rain</h4>
                        <p>#81ceeb</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#850000'}}>
                        <h4>Sonoran Red</h4>
                        <p>#850000</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#c62840'}}>
                        <h4>Bougainvillea</h4>
                        <p>#c62840</p>
                    </div>
                </section>
                <h2>Accents</h2>
                <h6>Include ~3 accent colors</h6>
                <section>
                    <div className="color-swatch" style={{backgroundColor:'#7f8b5a'}}>
                        <h4>Saguaro</h4>
                        <p>#7f8b5a</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#3f7a7a'}}>
                        <h4>Shade</h4>
                        <p>#3f7a7a</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#85372b'}}>
                        <h4>Brick</h4>
                        <p>#85372b</p>
                    </div>
                </section>
                <h2>Neutral Colors</h2>
                <h6>Use 2 light colors with good contrast</h6>
                <section>
                    <div className="color-swatch" style={{backgroundColor:'#e5eff7'}}>
                        <h4>Cloud</h4>
                        <p>#e5eff7</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#f2efea'}}>
                        <h4>Caliche</h4>
                        <p>#f2efea</p>
                    </div>
                    <div className="color-swatch" style={{backgroundColor:'#ffffff'}}>
                        <h4>White</h4>
                        <p>#ffffff</p>
                    </div>
                </section>
            </div>
        </article>
    )
}