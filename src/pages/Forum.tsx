import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/common/Card';
import { 
  MessageSquare, User, Tag, Plus, Send, ChevronRight, 
  Search, ArrowLeft, Heart, CheckCircle2, AlertCircle 
} from 'lucide-react';

export const Forum: React.FC = () => {
  const { user, forumPosts, addForumPost, addForumReply, toggleLikeForumPost } = useAuth();

  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activePostId, setActivePostId] = useState<string | null>(null);

  // Form states for creating a new post
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTag, setNewTag] = useState('পদার্থবিজ্ঞান');

  // Comment state
  const [commentText, setCommentText] = useState('');

  // Extract all unique tags
  const allTags = ['All', ...Array.from(new Set(forumPosts.flatMap(p => p.tags || [])))];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('ফোরামে পোস্ট করার জন্য দয়া করে লগইন করুন!');
      return;
    }
    if (!newTitle || !newContent) {
      alert('অনুগ্রহ করে শিরোনাম ও বিস্তারিত বিষয়বস্তু লিখুন।');
      return;
    }

    addForumPost(newTitle, newContent, [newTag]);
    setNewTitle('');
    setNewContent('');
    setShowCreateForm(false);
  };

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('মন্তব্য করতে দয়া করে লগইন করুন!');
      return;
    }
    if (!commentText.trim() || !activePostId) return;

    addForumReply(activePostId, commentText);
    setCommentText('');
  };

  const activePost = forumPosts.find(p => p.id === activePostId);

  const filteredPosts = forumPosts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.content.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'All' || (p.tags && p.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Back to list or Header */}
      {activePostId ? (
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
          <button 
            onClick={() => setActivePostId(null)}
            className="text-xs text-gray-500 hover:text-primary-600 font-bold flex items-center space-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ফোরাম আলোচনায় ফিরে যান</span>
          </button>
          <span className="text-[10px] text-gray-400">পোস্ট আইডি: #{activePost.id}</span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
              ডিসকাশন <span className="text-primary-600 dark:text-primary-400">ফোরাম</span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              যেকোনো কঠিন প্রশ্ন এখানে পোস্ট করুন, সহপাঠী ও অভিজ্ঞ শিক্ষকেরা উত্তর দেওয়ার জন্য তৈরি আছেন।
            </p>
          </div>

          <button
            onClick={() => {
              if (!user) {
                alert('প্রশ্ন করতে দয়া করে প্রথমে লগইন করুন!');
                return;
              }
              setShowCreateForm(!showCreateForm);
            }}
            className="px-4.5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 shadow-md shadow-primary-500/10 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4.5 h-4.5" />
            <span>প্রশ্ন করুন</span>
          </button>
        </div>
      )}

      {/* Active Post Full View Mode */}
      {activePostId && activePost ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main post and comments stream */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300 text-[10px] font-bold rounded">
                  {activePost.tags.join(', ')}
                </span>
                <span className="text-[10px] text-gray-400">
                  {activePost.createdAt.includes('T') ? new Date(activePost.createdAt).toLocaleDateString('bn-BD') : activePost.createdAt}
                </span>
              </div>

              <h2 className="text-lg font-bold text-gray-950 dark:text-white leading-snug">{activePost.title}</h2>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">{activePost.content}</p>

              <div className="flex items-center space-x-4 border-t border-gray-50 dark:border-gray-800 pt-4 text-xs">
                <span className="flex items-center space-x-1.5 text-gray-500 font-semibold">
                  <User className="w-4.5 h-4.5 text-gray-400" />
                  <span>{activePost.authorName}</span>
                </span>
                
                <button 
                  onClick={() => toggleLikeForumPost(activePost.id)}
                  className="flex items-center space-x-1.5 text-red-500 hover:text-red-600 font-bold cursor-pointer"
                >
                  <Heart className={`w-4.5 h-4.5 ${activePost.likes > 4 ? 'fill-red-500' : ''}`} />
                  <span>{activePost.likes} লাইকস</span>
                </button>
              </div>
            </Card>

            {/* Replies section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">উত্তরসমূহ ({activePost.replies.length})</h3>
              
              <div className="space-y-3">
                {activePost.replies.map((comment) => (
                  <div 
                    key={comment.id}
                    className="p-4 bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 rounded-2xl space-y-2 shadow-sm"
                  >
                    <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold">
                      <span className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                        <User className="w-3.5 h-3.5 text-gray-400" />
                        <span>{comment.authorName} {comment.authorRole === 'teacher' && <span className="ml-1 text-[8px] bg-green-100 text-green-700 dark:bg-green-950 px-1 rounded">মেন্টর</span>}</span>
                      </span>
                      <span>
                        {comment.createdAt.includes('T') ? new Date(comment.createdAt).toLocaleDateString('bn-BD') : comment.createdAt}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-normal font-normal">{comment.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Post Reply input Form */}
            <form onSubmit={handleSendComment} className="flex gap-2 bg-white dark:bg-gray-850 p-2.5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder={user ? "আপনার উত্তর বা যুক্তিটি এখানে লিখুন..." : "মন্তব্য করতে দয়া করে প্রথমে লগইন করুন"}
                disabled={!user}
                className="flex-1 p-2.5 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none"
              />
              <button
                type="submit"
                disabled={!user || !commentText.trim()}
                className="p-2.5 px-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-200 text-white font-bold rounded-xl text-xs flex items-center space-x-1 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">পাঠান</span>
              </button>
            </form>
          </div>

          {/* Right quick rules / sidebar */}
          <div className="lg:col-span-4 space-y-5">
            <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl space-y-3.5 text-xs font-semibold text-gray-500">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">ফোরামের নিয়মনীতি</h3>
              <p className="font-normal text-gray-400">ক্লাসরুমে পড়াশোনা সংক্রান্ত শালীনতা বজায় রেখে বন্ধুত্বপূর্ণভাবে উত্তর আদান-প্রদান করার অনুরোধ রইল।</p>
            </Card>
          </div>
        </div>
      ) : (
        /* Discussion Thread List Mode */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main List column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Create Post collapsing form */}
            {showCreateForm && (
              <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-3xl space-y-4">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">নতুন কৌতূহল বা প্রশ্ন সাবমিট করুন</h3>
                
                <form onSubmit={handleCreatePost} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">প্রশ্ন বা আলোচনার সারসংক্ষেপ *</label>
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none"
                        placeholder="যেমন: অপটিক্যাল ফাইবারে আলোর কোনো নীতি কাজ করে?"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">ট্যাগ / বিষয়</label>
                      <select
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none"
                      >
                        <option value="পদার্থবিজ্ঞান">পদার্থবিজ্ঞান</option>
                        <option value="রসায়নবিজ্ঞান">রসায়নবিজ্ঞান</option>
                        <option value="গণিত">গণিত</option>
                        <option value="আইসিটি">আইসিটি</option>
                        <option value="সাধারণ">সাধারণ</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">বিস্তারিত ব্যাখ্যা ও নমুনা ডাটা *</label>
                    <textarea
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      rows={4}
                      className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none"
                      placeholder="আপনার সূত্র, অংক বা সন্দেহজনক ধারণাটি বিস্তারিতভাবে এখানে লিখুন..."
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 rounded-xl cursor-pointer"
                    >
                      বাতিল
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs cursor-pointer shadow-sm shadow-primary-500/10"
                    >
                      প্রশ্ন সাবমিট করুন
                    </button>
                  </div>
                </form>
              </Card>
            )}

            {/* Filter tags panel */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-gray-850 p-2 rounded-2xl border border-gray-100 dark:border-gray-800 max-w-full overflow-x-auto">
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedTag === t ? 'bg-primary-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400'}`}
                >
                  {t === 'All' ? 'সব আলোচনা' : t}
                </button>
              ))}
            </div>

            {/* Thread post list */}
            <div className="space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white dark:bg-gray-850 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">বর্তমানে এই ক্যাটাগরিতে কোনো প্রশ্ন বা টপিক পাওয়া যায়নি।</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <Card 
                    key={post.id}
                    onClick={() => setActivePostId(post.id)}
                    className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl hover:shadow-md transition-all cursor-pointer space-y-3"
                  >
                    <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold">
                      <span className="flex items-center space-x-1.5 text-gray-500">
                        <Tag className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                        <span>{post.tags.join(', ')}</span>
                      </span>
                      <span>{post.createdAt.includes('T') ? new Date(post.createdAt).toLocaleDateString('bn-BD') : post.createdAt}</span>
                    </div>

                    <h3 className="text-sm font-bold text-gray-950 dark:text-white leading-snug group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-normal">{post.content}</p>

                    <div className="border-t border-gray-50 dark:border-gray-800 pt-3 flex justify-between items-center text-xs">
                      <span className="flex items-center space-x-1.5 text-gray-400 font-semibold">
                        <User className="w-4 h-4 shrink-0" />
                        <span className="truncate max-w-[120px]">{post.authorName}</span>
                      </span>

                      <div className="flex items-center space-x-3.5 text-gray-400">
                        <span className="flex items-center space-x-1 text-red-500 font-bold">
                          <Heart className="w-4 h-4 fill-red-500/10" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1 text-primary-600 font-bold">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.replies.length}টি উত্তর</span>
                        </span>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>

          </div>

          {/* Right sidebar info */}
          <div className="lg:col-span-4 space-y-5">
            <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl space-y-4">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">গরম কৌতূহল (Hot Topics)</h3>
              <div className="space-y-3">
                {forumPosts.slice(0, 2).map((post) => (
                  <div 
                    key={post.id}
                    onClick={() => setActivePostId(post.id)}
                    className="p-3 bg-gray-50/50 dark:bg-gray-900/30 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:border-primary-400 transition-colors"
                  >
                    <p className="text-[10px] text-primary-600 font-bold uppercase">{post.tags.join(', ')}</p>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate mt-1">{post.title}</h4>
                    <p className="text-[9px] text-gray-400 mt-0.5">{post.replies.length}টি উত্তর • {post.likes} লাইকস</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

        </div>
      )}

    </div>
  );
};
