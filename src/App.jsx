function Btn () {
  return (
    <button>
      Click Me
    </button>
  );
}

function navbar () {
  return (
    <nav style={styles.nav}>
      <div className="logo">
        <h2 style={styles.logo}>DEVs</h2>
      </div>

      <div style={styles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </div>

      <button style={styles.button}>Login</button>
    </nav>
  );
}



export default function App () {
  return (
    <div>
      <navbar />
      {/* <h1>This is a Heading</h1>
      <Btn></Btn> */}
    </div>
  );
}



const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  },
  button: {
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#fff",
    color: "#333",
    cursor: "pointer",
    borderRadius: "5px"
  }
};
