import { useInView } from "react-intersection-observer";

const useInViewOnce = (options = {}) => {
    const { threshold = 0, ...rest } = options;
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true,
        ...rest,
    });

    return [ref, inView];
};

export default useInViewOnce;
