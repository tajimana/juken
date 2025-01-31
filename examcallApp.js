import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ExamCallApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("/gogo_exam_motivation.mp3"); // 事前に用意した音声ファイル

  const playMessage = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
      audio.onended = () => setIsPlaying(false);
    }
  };

  const shareOnX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("🔥GoGo!! 合格するぜいー！！🔥 受験生応援メッセージを受け取ろう！");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-200 p-4">
      <motion.div 
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }} 
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        <Card className="p-6 text-center bg-white shadow-lg rounded-2xl">
          <h1 className="text-2xl font-bold text-red-600">🔥GoGo!! 合格するぜいー！！🔥</h1>
          <p className="mt-2 text-gray-600">熱血先生の激励電話を受け取れ！</p>
          <Button 
            className="mt-4 text-lg bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600" 
            onClick={playMessage} 
            disabled={isPlaying}
          >📞 電話を受ける！</Button>
          <Button 
            className="mt-4 text-lg bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600" 
            onClick={shareOnX}
          >🐦 Xでシェア！</Button>
        </Card>
      </motion.div>
    </div>
  );
}