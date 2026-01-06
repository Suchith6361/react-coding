const withBox = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return (
      <div className="m-2 border-red-600 border-spacing-y-24 border-x-4 border-y-4 p-2 ">
        <h2 className="text-2xl">Wrapped by HOC</h2>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBox;
