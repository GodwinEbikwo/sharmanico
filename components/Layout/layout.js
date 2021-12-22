import { LazyMotion, domAnimation } from "framer-motion";

export default function Layout({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
