<section class="gallery">

        <div class="container containerGallery">

            <div class="toolbar">
              <ul class="view-options">
                <li class="zoom">
                  <input type="range" min="180" max="380" value="280">
                </li>
                <li class="show-grid active">
                  <button disabled>
                    <img src="img/grid-view.png" alt="grid view">  
                  </button>
                </li>
                <li class="show-list">
                  <button>
                    <img src="img/list-view.png" alt="list view">  
                  </button>
                </li>
              </ul>
            </div>

            <ol class="image-list grid-view">
                  <?php
                  gridFolders($directories);
                  ?>
            </ol>

        </div>
      </section>
   
          <!-- 
      <footer>
        <div class="container">
            <small>Footer</small>
            <small>
              Made with <span>❤</span> 
              by <a href="http://georgemartsoukos.com/" target="_blank">George Martsoukos</a>
            </small>       
        </div>
      </footer>

      