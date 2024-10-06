export const LatestPosts = () => {
  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-heading font-black">Your portal to everything blockchain</h2>
        <p>
          Keep up with the newest trends, updates, and insights in the
          blockchain world, updated weekly
        </p>
        <div>
          {[...new Array(4)].fill(0).map((item, itemIndex) => (
            <div>
              <div>Technology</div>
              <h3>Regulatory Challenges Facing Blockchain</h3>
              <p>
                Understanding the regulatory landscape surrounding blockchain
                and what it means for the future of this technologys.
              </p>
              <div>
                <button>Read more</button>
                <div>arrow</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
