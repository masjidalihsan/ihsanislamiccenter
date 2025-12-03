export default function PrayerTimesSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <iframe
        src="https://timing.athanplus.com/masjid/widgets/embed?theme=1&masjid_id=EdoeO9L7"
        width="100%"
        height="500"
        frameBorder="0"
        allowTransparency={true}
        className="w-full"
        title="Prayer Times"
      />
    </div>
  );
}
