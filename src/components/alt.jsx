return (
    <li ref={projectRef} className="md:pb-3 md:mb-20">
        <div
            className={`w-full h-[400px] sm:h-fit flex items-center ${isVisible ? 'fade-in' : 'fade-out'}`}
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
        >
                    <div className={`detail-bg bg-gray space-y-3 w-[50%] sm:h-fit md:h-fit sm:w-full md:absolute ${isEven ? 'lg:left-[0] lg:pl-20': 'md:right-[0] md:pr-20'}`}>
                        <label id={project.id} className="font-semibold lg:text-2xl">{project.name}</label>
                        <p className="lg:text-md">{project.tools} | {project.feature}</p>
                        <div className="description p-2">
                            <p>{project.caption}</p>
                            <a href={project.url} className="self-center justify-self-end">
                                <p className="mt-4 underline">Go To Project</p>
                            </a>
                        </div>
                    </div>
                    <div className={`w-[50%] flex justify-center absolute md:visible sm:collapse ${isEven ? 'md:right-[0]': 'md:left-[0]'}`}>
                        <div className="laptop lg:w-[80%] 3xl:w-[60%] h-[100%] p-5 md:w-full">
                            <div className="screen md:w-[80%] md:h-[200px] 2xl:h-[300px] 3xl:w-[]">
                                <div className="lcd">
                                    {AnimationComponent && <AnimationComponent />}
                                </div>
                                <div className="glass_frame"></div>
                                <div className="screen_reflection"></div>
                            </div>
                            <div className="keyboard top"></div>
                            <div className="keyboard bottom"></div>
                        </div>
                    </div>
        </div>
    </li>
);