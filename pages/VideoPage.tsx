import { Metadata } from 'next';
import {decode} from 'he'
export const metadata: Metadata = {
  title: 'Video Gallery',
  description: 'Explore our collection of curated videos showcasing our finest content.',
};

interface VideoData {
  title: string;
  source: string;
}

interface VideosResponse {
  status: string;
  message: string;
  data: VideoData[];
}

const decodeBase64 = (base64String: string): string => {
  try {
    return Buffer.from(base64String, 'base64').toString('utf-8');
  } catch {
    return 'Untitled Video';
  }
};



export default async function VideosPage() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  let videos: VideoData[] = [];
  let error: string | null = null;

  try {
    const response = await fetch(`${apiUrl}/videos`);

    if (!response.ok) throw new Error('Failed to fetch videos');

    const result: VideosResponse = await response.json();

    if (result.status !== 'success' || !Array.isArray(result.data)) {
      throw new Error(result.message || 'Invalid response format');
    }

    videos = result.data;
  } catch (err) {
    console.error('Error fetching videos:', err);
    error = err instanceof Error ? err.message : 'Unknown error occurred';
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-red-600 font-medium mb-4">{error}</p>
        <a
          href=""
          className="inline-block px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md"
        >
          Retry
        </a>
      </div>
    );
  }

  if (!videos.length) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 font-medium">No videos available at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">OUR COLLECTION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-xaidez-accent mb-4">Video 
            <span className='pl-2 text-xaidez-dark'>
            Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent  mx-auto mb-6" />
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of curated videos showcasing our finest content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => {
            const decodedTitle = decode(decodeBase64(video.title));

            return (
              <div
                key={`${video.title}-${index}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <iframe
                    src={video.source}
                    title={decodedTitle}
                    className="w-full h-full"
                    allowFullScreen
                  />
                  <div className="hidden lg:flex absolute inset-0 items-end bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300">
                    <p className="text-white text-base p-4 w-full line-clamp-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                      {decodedTitle}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2 h-10 lg:h-6">
                    {decodedTitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
