"use client";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DealsCard } from "./DealsCard";

interface AuctionItem {
  _id: number;
  images: string[];
  title: string;
  currentBid: string;
  startTime: string;
  endTime: string;
  badges?: string[];
  auctionId: string;
  status: string;
}

export function LatestAuctionSection() {
  const [latestData, setLatestData] = useState<AuctionItem[]>([]);
  console.log(latestData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auctions/get-latest-auctions`,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        setLatestData(data.data);
      } catch (error) {
        console.error("Failed to fetch privacy policy:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mt-24">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-9 bg-white rounded" />
            <div>
              <h1 className="font-benedict text-[40px] font-normal mb-2 text-white">Our Deal</h1>
            </div>
          </div>
          <p className="text-[40px] font-bold text-white">Browse Our Deals</p>
        </div>
        <Link
          href={'/auctions'}
        >
          <Button className="bg-white text-black">
            Explore All <MoveRight />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-6">
              <DealsCard/>
        {/* {latestData &&
          latestData
            .slice(0, 8)
            .map((auction: AuctionItem) => (
              <AuctionCard
                status={auction.status}
                key={auction._id}
                image={auction.images[0]}
                title={auction.title}
                currentBid={auction.currentBid}
                startTime={auction.startTime}
                endTime={auction.endTime}
                auctionId={auction._id.toString()}
              />
            ))} */}
      </div>
    </section>
  );
}
