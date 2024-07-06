import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex justify-start">
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultLayout;