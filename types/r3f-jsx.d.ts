/**
 * Augment JSX for React Three Fiber elements when using React 19.
 * @see https://github.com/pmndrs/react-three-fiber/issues/3385
 */
import type { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends ThreeElements {}
  }
  namespace React {
    namespace JSX {
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}
