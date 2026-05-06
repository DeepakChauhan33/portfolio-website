import GitHubCalendar from "react-github-calendar";

export default function GitHubGraph() {
    return (
        <section className="px-4 py-12">
            <h2 className="text-2xl font-bold mb-6">GitHub Contributions</h2>

            <div className="p-4 rounded-2xl shadow-lg overflow-x-auto">
                <GitHubCalendar
                    username="your-github-username"
                    blockSize={14}
                    blockMargin={5}
                    fontSize={14}
                    colorScheme="dark"
                />
            </div>
        </section>
    );
}