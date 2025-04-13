import BookingFormDetails from '@/components/booking/form';
import RichViewer from '@/components/diploma/RichViewer';
import ImageGallery from '@/components/gallary/image-gallery';
import VideoPlayer from '@/components/video/VideoPlayer';
import { api, BaseUrl } from '@/lib/axios';
import { QueryGetDiploma } from '@/lib/queryGraphql';
import { DiplomaType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function DiplomaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await api.post('', {
    query: QueryGetDiploma,
    variables: {
      documentId: id,
    },
  });
  const { diploma }: { diploma: DiplomaType } = res.data.data;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6">
            <Link
              href="/"
              className="inline-flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Diplomas
            </Link>

            <h1 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-white lg:text-4xl">
              {diploma.text}
            </h1>

            {diploma.badge && (
              <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-white bg-primary rounded-full">
                {diploma.badge}
              </span>
            )}

            {diploma.image && (
              <div className="mt-6">
                <Image
                  className="w-full h-80 object-cover rounded-lg"
                  src={BaseUrl + diploma.image.url}
                  alt={diploma.image.alternativeText || 'Diploma Image'}
                  width={1000}
                  height={600}
                />
              </div>
            )}

            <div className="mt-6 flex items-center gap-x-6 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium">Created:</span>{' '}
                {new Date(diploma.createdAt).toLocaleDateString()}
              </p>
              {diploma.date && (
                <p>
                  <span className="font-medium">Date:</span> {diploma.date}
                </p>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Description</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                {diploma.description}
              </p>
            </div>

            {diploma.long_description && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Details
                </h3>
                <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <RichViewer content={diploma.long_description} />
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-x-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Price: ${diploma.price}
              </p>
              {diploma.discount > 0 && (
                <p className="text-lg text-green-600 dark:text-green-400">
                  Discount: {diploma.discount}%
                </p>
              )}
            </div>

            {diploma.documentId && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Diploma ID:</span>{' '}
                  {diploma.documentId}
                </p>
              </div>
            )}

            {diploma.video?.url && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Video
                </h3>
                <div className="mt-4">
                  <VideoPlayer src={BaseUrl + diploma.video.url} />
                </div>
              </div>
            )}

            {diploma.images?.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Gallery
                </h3>
                <div className="mt-4">
                  <ImageGallery images={diploma.images} />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
              <div className='bg-white dark:bg-gray-800 p-6'>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Diploma Summary
                </h3>
                <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-medium">Title:</span> {diploma.text}
                  </li>
                  <li>
                    <span className="font-medium">Price:</span> ${diploma.price}
                  </li>
                  {diploma.discount > 0 && (
                    <li>
                      <span className="font-medium">Discount:</span>{' '}
                      {diploma.discount}%
                    </li>
                  )}
                  {/* {diploma.badge && (
                    <li>
                      <span className="font-medium">Badge:</span> {diploma.badge}
                    </li>
                  )} */}
                  <li>
                    <span className="font-medium">Created:</span>{' '}
                    {new Date(diploma.createdAt).toLocaleDateString()}
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/diplomas"
                    className="block text-center bg-gray-500/10 text-primary px-4 py-2 rounded-none transition-colors"
                  >
                    View All Diplomas
                  </Link>
                </div>
              </div>
            <div className="sticky top-20  bg-white dark:bg-gray-800 p-6">
              <BookingFormDetails diploma={diploma} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}