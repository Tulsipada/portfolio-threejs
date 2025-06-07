import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import { Mesh } from 'three';
import { Code, Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Award, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import FloatingCube from '@/components/FloatingCube';
import AnimatedSphere from '@/components/AnimatedSphere';
import ParticleField from '@/components/ParticleField';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Three.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Git', 'Next.js', 'TailwindCSS'
  ];

  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio built with Three.js and React",
      tech: ["React", "Three.js", "TypeScript"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with modern UI",
      tech: ["Next.js", "Stripe", "Prisma"],
      link: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration",
      tech: ["React", "WebSockets", "OpenAI"],
      link: "#"
    }
  ];

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const achievements = [
    { icon: Award, title: "5+ Years Experience", description: "Professional development" },
    { icon: Code, title: "50+ Projects", description: "Successfully delivered" },
    { icon: Calendar, title: "Available", description: "Open for opportunities" },
    { icon: MapPin, title: "Remote Ready", description: "Global collaboration" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <pointLight position={[-10, -10, -10]} intensity={0.7} color="#8b5cf6" />
            <pointLight position={[0, 15, 5]} intensity={0.8} color="#06b6d4" />
            <pointLight position={[15, 0, -5]} intensity={0.6} color="#10b981" />
            
            <ParticleField />
            
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <FloatingCube position={[-8, 3, -5]} color="#8b5cf6" />
            </Float>
            
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
              <AnimatedSphere position={[8, -3, -8]} color="#06b6d4" />
            </Float>
            
            <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
              <FloatingCube position={[5, 5, -10]} color="#10b981" scale={0.7} />
            </Float>
            
            <Float speed={1.8} rotationIntensity={2} floatIntensity={1}>
              <AnimatedSphere position={[-6, -4, -6]} color="#f59e0b" scale={0.8} />
            </Float>

            <Float speed={1.2} rotationIntensity={0.8} floatIntensity={2.5}>
              <FloatingCube position={[2, -6, -12]} color="#ef4444" scale={0.5} />
            </Float>
            
            <Float speed={2.5} rotationIntensity={1.8} floatIntensity={1.2}>
              <AnimatedSphere position={[-10, 2, -15]} color="#a855f7" scale={0.6} />
            </Float>
            
            <Float speed={0.8} rotationIntensity={0.3} floatIntensity={4}>
              <FloatingCube position={[12, -1, -8]} color="#06b6d4" scale={0.9} />
            </Float>
            
            <Float speed={3} rotationIntensity={2.5} floatIntensity={0.8}>
              <AnimatedSphere position={[0, 8, -20]} color="#84cc16" scale={0.4} />
            </Float>
            
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    DevPortfolio
                  </span>
                  <span className="text-xs text-gray-400 hidden sm:block">Full Stack Developer</span>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 group"
                    onClick={() => setCurrentSection(item.label.toLowerCase())}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button 
                  size="sm" 
                  className="hidden sm:flex bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5 text-white" />
                  ) : (
                    <Menu className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-xl">
                <div className="px-4 py-6 space-y-3">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={() => {
                        setCurrentSection(item.label.toLowerCase());
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Avatar className="w-60 h-60 border-4 border-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 p-1 shadow-2xl shadow-purple-400/30">
                    <AvatarImage 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                      alt="Developer Profile"
                      className="object-cover rounded-full"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-4xl font-bold rounded-full">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-cyan-400/20 animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                John Doe
              </h1>
              <h2 className="text-2xl md:text-4xl mb-8 text-gray-300">
                Full Stack Developer & 3D Enthusiast
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Crafting immersive digital experiences with cutting-edge technologies.
                Passionate about creating beautiful, functional, and interactive web applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View Projects
              </Button>
            </div>

            <div className="flex justify-center space-x-6 mt-12">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Passionate developer with a vision to transform ideas into digital reality
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              {/* Left Column - Story */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <Code className="mr-3 h-6 w-6 text-purple-400" />
                    My Journey
                  </h4>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Started my coding journey 5+ years ago with a simple "Hello World" and never looked back. 
                      What began as curiosity quickly evolved into a passionate career in full-stack development.
                    </p>
                    <p>
                      I specialize in creating modern, scalable web applications using React, TypeScript, and Node.js. 
                      My expertise extends to 3D graphics with Three.js, bringing immersive experiences to the web.
                    </p>
                    <p>
                      Beyond technical skills, I'm passionate about clean code, user experience, and collaborative development. 
                      I believe in writing code that not only works but is maintainable and scalable.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-6 text-white">
                    What Drives Me
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Building solutions that make a real impact',
                      'Continuous learning and staying current with tech trends',
                      'Mentoring junior developers and sharing knowledge',
                      'Open source contributions and community involvement'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Achievements & Stats */}
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                    >
                      <CardContent className="p-6 text-center">
                        <achievement.icon className="h-8 w-8 text-purple-400 mx-auto mb-3 group-hover:text-cyan-400 transition-colors" />
                        <h5 className="font-bold text-white mb-2">{achievement.title}</h5>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-6 text-white">
                    Core Competencies
                  </h4>
                  <div className="space-y-4">
                    {[
                      { skill: 'Frontend Development', level: 95 },
                      { skill: 'Backend Architecture', level: 88 },
                      { skill: '3D Graphics & Animation', level: 82 },
                      { skill: 'UI/UX Design', level: 78 },
                      { skill: 'Project Management', level: 85 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{item.skill}</span>
                          <span className="text-purple-400">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-6 text-white">
                    Let's Connect
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Always excited to discuss new opportunities, collaborate on interesting projects, 
                    or simply chat about the latest in web development.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
                >
                  <CardContent className="p-6 text-center">
                    <span className="text-lg font-semibold text-white">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Form */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Get In Touch</h4>
                  <p className="text-xl text-gray-300 mb-8">
                    Ready to bring your ideas to life? Let's create something amazing together.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-purple-400" />
                    <span className="text-gray-300">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="h-6 w-6 text-purple-400" />
                    <span className="text-gray-300">github.com/johndoe</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-purple-400" />
                    <span className="text-gray-300">linkedin.com/in/johndoe</span>
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 John Doe. Crafted with ❤️ using React & Three.js
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
