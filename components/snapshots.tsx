export function Snapshots() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nearcore Snapshots
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Starting June 1, 2025, the free nearcore data snapshots have been
            deprecated. For regular RPC nodes and validators, the Infrastructure
            Committee and Near One suggest using{" "}
            <b>Epoch Sync x Decentralized state sync.</b> Please visit{" "}
            <a
              rel="external nofollow noopener"
              href="https://near-nodes.io/"
              target="_blank"
            >
              https://near-nodes.io/
            </a>{" "}
            for more information.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you would like to request an Archival node snapshot, please
            contact us by email at{" "}
            <a href="mailto:snapshots@fastnear.com">snapshots@fastnear.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
