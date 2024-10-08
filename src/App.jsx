import { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Options from "./components/Options/Options";
import Sidebar from "./components/Layout/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "./components/utils/framer-variants";

function App() {
  const [productTabIsOpen, setProductTabIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main>
      <Navbar
        toggleProductTab={() => setProductTabIsOpen(!productTabIsOpen)}
        productTabIsOpen={productTabIsOpen}
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />
      <Sidebar
        onOpenProductTab={() => {
          setProductTabIsOpen(true);
          setIsSidebarOpen(false);
        }}
        sidebarStatus={isSidebarOpen}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      />
      <AnimatePresence>
        {productTabIsOpen && (
          <motion.div
            variants={Variants}
            initial="hidden"
            exit="exit"
            animate="animate"
            key="product-tab"
          >
            <Options
              toggleProductTab={() => setProductTabIsOpen(!productTabIsOpen)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
