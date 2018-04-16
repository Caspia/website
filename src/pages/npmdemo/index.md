<h1>Offline NPM registry support</h1>
<h2>Introduction</h2>
<p>
In support of offline computer education in prisons that require npm, Caspia
has support for software that permits use of npm in an offline environment
(such as a prison laptop or network without internet access). This is based on
<a href="https://github.com/verdaccio/verdaccio">verdaccio</a> as an offline cache.
</p>
<p>
To use verdaccio as an offline cache, the cache must be populated with the npm repos that 
are desired to be available offline. Caspia has simple software for this, called
<a href="https://github.com/Caspia/npm-populate">npm-populate</a>. When run, this creates
the storage files used in verdaccio from a list of modules that should be available
(including their dependancies). We've also stored results of some runs of npm-populate in downloadable 
.tar.gz files that can be used directly with verdaccio. References to those downloads are available 
<a href="../datalinks.html">here</a> (along withe links to other Caspia
projects). The current master list of modules that are used in current populate runs is in
<a href="https://github.com/Caspia/npm-populate/blob/master/moduleList.txt">moduleList.txt</a>
This list is mostly derived from the needs of our current students (doing React development) but 
also includes other modules that are popular in npm.
</p>
<p>
Npm-populate includes in the release/ folder some Docker files and instructions that allow
this to be deployed, but those instructions are intended to be used with online demos. The 
main application of this is intended to be with the 
<a href="https://github.com/operepo/ope">OPE project.</a> that focuses on deployment of offline
resources, including laptops, in support of education programs in the Washington State Department
of Corrections.
</p>
<p>
To allow testing of the offline npm repos (including for use of instructors to confirm that a
particular module is available offline), Caspia has a demo site of the offline npm repo. The 
master list of available demos will be kept <a href="../datalinks.html">here</a>,
but as of this writing only one is available, whose use will be described below.
</p>
<h2>Demo</h2>
<p>
The demo is at <a href="http://npm.caspia.org">http://npm.caspia.org</a>
(but see below, this link as a web link is not really useful).
</p>
<p>
Simply navigating to that page as a website, you will see the standard verdaccio web interface showing available
private packages, and allowing you to login to add packages. There are no available logins or
private packages, so this is not a useful page.
</p>
<p>
To use the offline registry, you have to specify it as a registry in an <code>npm install</code> command. For 
testing, one complication is that <code>npm install</code> will use its local cache to install files, and if you
are testing an offline install you don't want that, as npm might appear to install something from the offline demo
that is really being served from your local cache. To get around that, when you do a test install you
need to specify an empty cache, as well as a link to the offline demo registry. The commands below
will do a test install, creating a local cache directory ./cache/ You should delete that directory
when you are done testing.
<p>
Entering this should allow you to install locally the npm module <strong>passport</strong> and dependencies using the demo 
registry:
</p>
<code>
npm install --cache ./cache --registry http://npm.caspia.org passport
</code>
</p>
<p>
That install should succeed. To confirm that you are using the offline repo (which has limited package and 
version availability) try this command, which should fail because only angular@1.6.9 is available in the cache:
<p><code>npm install --cache ./cache --registry http://npm.caspia.org angular@1.6.8</code></p>
Install without a specified (non-existent) version number should succeed:
<p><code>npm install --cache ./cache --registry http://npm.caspia.org angular</code></p>
</p>
</body>
</html>
