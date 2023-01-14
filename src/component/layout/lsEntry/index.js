import React from "react";
import "./index.css";

export default function Index() {
  return (
    <>
      <div className="card-head ml-2">
        <div className="card-title">Last entries</div>
        <button className="see-all">See all</button>
      </div>
      <div className="lastE">
        <div className="lastE-date">
          14 <span className="lastE-date-name">SEPTEMBER</span>
        </div>
        <div className="lastE-des">
          <div className="lastE-des-title">Old Links are Changed!</div>
          <div className="lastE-des-body">
            পূর্বের সব ট্যাব কেটে রিফ্রেশ দিয়ে একদম নতুন করে সাইটে ঢুকুন। কারণ,
            পূর্বের ডাউনলোড লিংক গুলো পরিবর্তন করা হয়েছে। অবশ্যই রিফ্রেশ করে
            নিবেন।
          </div>
        </div>
      </div>
      <div className="lastE">
        <div className="lastE-date">
          5 <span className="lastE-date-name">AUGUST</span>
        </div>
        <div className="lastE-des">
          <div className="lastE-des-title">
            (IDM) Google Drive Link Expire Solution
          </div>
          <div className="lastE-des-body">
            ইন্টারনেটের সাথে সম্পৃক্ত হলে অবশ্যই আপনি মুভি, গান, অ্যাপ ইত্যাদি
            বিভিন্ন ফাইল ডাউনলোড করেন। ডাউনলোড করার সময় একটা সমস্যা প্রায়শই হয়,
            আর তা হলো ডাউনলোড ফেইল্ড হয়ে
          </div>
        </div>
      </div>
      <div className="lastE">
        <div className="lastE-date">
          27 <span className="lastE-date-name">MARCH</span>
        </div>
        <div className="lastE-des">
          <div className="lastE-des-title">
            (UC Browser) Google Drive Link Expire Solution
          </div>
          <div className="lastE-des-body">
            লিংক এক্সপায়ার ডাউনলোড ফেইল সমস্যার সমাধান ? ২ মিনিট সময় করে হলেও
            প্রতিটি কথা ভালোভাবে পড়ুন। কারণ , এমবিগুলো নষ্ট হলে ক্ষতি টা আপনার ই
            হবে। আমার নয়। যদি কিছু বুঝতে
          </div>
        </div>
      </div>
    </>
  );
}
