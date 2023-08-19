function updateUserTokenFromResponse(response){if(typeof response.data!=="undefined"&&typeof response.data.token!=="undefined"&&typeof window.sessionUser!=="undefined"){window.sessionUser.account_token=response.data.token}if(typeof response.data!=="undefined"&&typeof response.data.login_token!=="undefined"&&typeof window.sessionUser!=="undefined"){window.sessionUser.login_token=response.data.login_token}}function loadSliderAndHomeContent(sort,search,category,wl_sort,limit,page){$.ajax({type:"POST",url:"/home-content",dataType:"JSON",data:{sort:sort,category:category,search:search,wl_sort:wl_sort,limit:limit,page:page},success:function(response){if(typeof response.data!=="undefined"&&typeof response.data.hero_banners!=="undefined"){$("#hero_banner_main_container").html(response.data.hero_banners);$("#hero_banner_main_container").show();$(".owl-carousel").owlCarousel({loop:true,margin:10,nav:false,dot:true,autoplay:true,slideSpeed:5e3,items:1,checkVisibility:false,autoplayHoverPause:true})}if(typeof parseHomePageResponseData!=="undefined"){parseHomePageResponseData(response)}},error:function(){$("#hero_banner_main_container").hide();if(typeof parseHomePageResponseError!=="undefined"){parseHomePageResponseError()}}})}function loadNewHomeProducts(product_sort,product_search,product_category,watchlist_sort,limit,page){try{page=isNaN(page)?parseInt(page,10):page}catch(e){}if(isNaN(page)){page=1}beforeHomePageRequest();$.ajax({type:"POST",url:"/home-products-content",dataType:"JSON",data:{sort:product_sort,search:product_search,category:product_category,wl_sort:watchlist_sort,limit:limit,page:page},success:function(response){parseHomePageResponseData(response)},error:function(){parseHomePageResponseError()}})}function loadNewHomeRaffles(raffle_sort,raffle_search,raffle_category){beforeHomePageRaffleRequest();$.ajax({type:"POST",url:"/home-raffles-content",dataType:"JSON",data:{sort:raffle_sort,search:raffle_search,category:raffle_category},success:function(response){parseHomePageRaffleResponseData(response)},error:function(){parseHomePageRaffleResponseError()}})}function loadAuctionProducts(product_sort,product_search,product_category,product_limit,product_page){try{product_page=isNaN(product_page)?parseInt(product_page,10):product_page}catch(e){}if(isNaN(product_page)){product_page=1}beforeAuctionProductRequest();$.ajax({type:"POST",url:"/auction-products-content",dataType:"JSON",data:{sort:product_sort,search:product_search,category:product_category,limit:product_limit,page:product_page},success:function(response){parseAuctionProductResponseData(response)},error:function(){parseAuctionProductResponseError()}})}function loadRaffleItems(raffle_sort,raffle_search,raffle_category,raffle_limit,raffle_page){try{raffle_page=isNaN(raffle_page)?parseInt(raffle_page,10):raffle_page}catch(e){}if(isNaN(raffle_page)){raffle_page=1}beforeRaffleItemRequest();$.ajax({type:"POST",url:"/raffle-items-content",dataType:"JSON",data:{sort:raffle_sort,search:raffle_search,category:raffle_category,limit:raffle_limit,page:raffle_page},success:function(response){parseRaffleItemResponseData(response)},error:function(){parseRaffleItemResponseError()}})}function loadWatchlistProducts(product_sort,product_search,product_category,product_limit,product_page){try{product_page=isNaN(product_page)?parseInt(product_page,10):product_page}catch(e){}if(isNaN(product_page)){product_page=1}beforeWatchlistProductRequest();$.ajax({type:"POST",url:"/watchlist-products-content",dataType:"JSON",data:{sort:product_sort,search:product_search,category:product_category,limit:product_limit,page:product_page},success:function(response){parseWatchlistProductResponseData(response)},error:function(){parseWatchlistProductResponseError()}})}function parseHomePageResponseError(){if($("#home_page_product_sort")[0]){$("#home_page_product_sort").prop("disabled",false)}if($("#home_page_product_category")[0]){$("#home_page_product_category").prop("disabled",false)}if($("#home_page_product_search_input")[0]){$("#home_page_product_search_input").prop("disabled",false)}if($("#home_page_product_cards .content_overlay")[0]){$("#home_page_product_cards .content_overlay").remove()}updateRelativeDateFields();updateProductDateFields();if($("#product_page_watchlist_items")[0]&&!$("#product_page_watchlist_items").is(":hidden")){$("#product_page_watchlist_items").html("");$("#product_page_watchlist_items").hide()}setUpHomePageListeners()}function parseHomePageRaffleResponseError(){if($("#home_page_raffle_sort")[0]){$("#home_page_raffle_sort").prop("disabled",false)}if($("#home_page_raffle_category")[0]){$("#home_page_raffle_category").prop("disabled",false)}if($("#home_page_raffle_search_input")[0]){$("#home_page_raffle_search_input").prop("disabled",false)}if($("#home_page_product_cards .content_overlay")[0]){$("#home_page_product_cards .content_overlay").remove()}updateRelativeDateFields();updateProductDateFields();setUpHomePageRaffleListeners()}function parseWatchlistProductResponseError(){if($("#watchlist_product_sort")[0]){$("#watchlist_product_sort").prop("disabled",false)}if($("#watchlist_product_category")[0]){$("#watchlist_product_category").prop("disabled",false)}if($("#watchlist_product_search_input")[0]){$("#watchlist_product_search_input").prop("disabled",false)}if($("#watchlist_product_limit")[0]){$("#watchlist_product_limit").prop("disabled",false)}if($("#watchlist_product_content .content_overlay")[0]){$("#watchlist_product_content .content_overlay").remove()}updateRelativeDateFields();updateProductDateFields();setUpWatchlistProductListeners()}function parseAuctionProductResponseError(){if($("#auction_product_sort")[0]){$("#auction_product_sort").prop("disabled",false)}if($("#auction_product_category")[0]){$("#auction_product_category").prop("disabled",false)}if($("#auction_product_search_input")[0]){$("#auction_product_search_input").prop("disabled",false)}if($("#auction_product_limit")[0]){$("#auction_product_limit").prop("disabled",false)}if($("#auction_product_content .content_overlay")[0]){$("#auction_product_content .content_overlay").remove()}updateRelativeDateFields();updateProductDateFields();setUpAuctionProductListeners()}function parseRaffleItemResponseError(){if($("#raffle_item_sort")[0]){$("#raffle_item_sort").prop("disabled",false)}if($("#raffle_item_category")[0]){$("#raffle_item_category").prop("disabled",false)}if($("#raffle_item_search_input")[0]){$("#raffle_item_search_input").prop("disabled",false)}if($("#raffle_item_limit")[0]){$("#raffle_item_limit").prop("disabled",false)}if($("#raffle_item_content .content_overlay")[0]){$("#raffle_item_content .content_overlay").remove()}if(window.connectionEstablished){emitOnGoingCheckOnVisibleProducts()}updateRelativeDateFields();updateProductDateFields();setUpRaffleItemListeners()}function parseHomePageResponseData(response){updateUserTokenFromResponse(response);if(typeof response.data!=="undefined"&&typeof response.data.on_going_products!=="undefined"){$.each(response.data.on_going_products,function(on_going_key,on_going_var){if(window.onGoingProducts.hasOwnProperty(on_going_key)){window.onGoingProducts[on_going_key].live_date=on_going_var.live_date;window.onGoingProducts[on_going_key].timer=on_going_var.timer}else{window.onGoingProducts[on_going_key]=on_going_var}})}if(typeof response.data!=="undefined"&&typeof response.data.upcoming_products!=="undefined"){$.each(response.data.upcoming_products,function(on_going_key,on_going_var){window.upcomingProducts[on_going_key]=on_going_var})}if(typeof response.data!=="undefined"&&typeof response.data.home_page_products!=="undefined"){$("#home_page_product_cards").removeClass("raffle-card");$("#home_page_product_cards").addClass("product-card");$("#home_page_product_cards").html(response.data.home_page_products)}if(typeof response.data!=="undefined"&&typeof response.data.home_page_search_sort_products!=="undefined"){$("#featured_product_search_sort").html(response.data.home_page_search_sort_products);$("#featured_product_search_sort").show()}$("#home_page_product_sort").prop("disabled",false);$("#home_page_product_category").prop("disabled",false);$("#home_page_product_search_input").prop("disabled",false);$("#home_page_product_limit").prop("disabled",false);if(typeof response.data!=="undefined"&&typeof response.data.watchlist_products!=="undefined"){if(response.data.watchlist_products){$("select[name=wl_sort]").prop("disabled",false);$("#product_page_watchlist_items").html(response.data.watchlist_products);$("#product_page_watchlist_items").show()}else{$("#product_page_watchlist_items").html("");$("#product_page_watchlist_items").hide()}}if(window.connectionEstablished){emitOnGoingCheckOnVisibleProducts()}if(typeof response.data!=="undefined"&&typeof response.data.auction_pagination!=="undefined"){$("#home_product_pagination").html(response.data.auction_pagination)}$("#featured_auction_raffle_toggle").html("Products");updateRelativeDateFields();updateProductDateFields();setUpHomePageListeners()}function parseHomePageTournamentData(response){if(typeof response.data!=="undefined"&&typeof response.data.tournaments!=="undefined"){$.each(response.data.tournaments,function(on_going_key,on_going_var){window.tournaments[on_going_key]=on_going_var})}if(window.connectionEstablished){}updateRelativeDateFields();updateProductDateFields()}function parseHomePageRaffleResponseData(response){updateUserTokenFromResponse(response);if(typeof response.data!=="undefined"&&typeof response.data.upcoming_raffles!=="undefined"){$.each(response.data.upcoming_raffles,function(on_going_key,on_going_var){window.upcomingRaffles[on_going_key]=on_going_var})}if(typeof response.data!=="undefined"&&typeof response.data.home_page_raffles!=="undefined"){$("#home_page_product_cards").removeClass("product-card");$("#home_page_product_cards").addClass("raffle-card");$("#home_page_product_cards").html(response.data.home_page_raffles)}if(typeof response.data!=="undefined"&&typeof response.data.home_page_search_sort_raffles!=="undefined"){$("#featured_product_search_sort").html(response.data.home_page_search_sort_raffles);$("#featured_product_search_sort").show()}$("#home_page_raffle_sort").prop("disabled",false);$("#home_page_raffle_category").prop("disabled",false);$("#home_page_raffle_search_input").prop("disabled",false);if(window.connectionEstablished){emitOnGoingCheckOnVisibleProducts()}if(typeof response.data!=="undefined"&&typeof response.data.view_more_params!=="undefined"){$("#view_more_params").attr("href","/raffles"+response.data.view_more_params)}$("#featured_auction_raffle_toggle").html('Featured Raffles | <a href="javascript:void(0)" class="a-green" id="load_featured_product_search_sort">Products</a>');updateRelativeDateFields();updateProductDateFields();setUpHomePageRaffleListeners()}function parseAuctionProductResponseData(response){updateUserTokenFromResponse(response);if(typeof response.data!=="undefined"&&typeof response.data.on_going_products!=="undefined"){$.each(response.data.on_going_products,function(on_going_key,on_going_var){if(window.onGoingProducts.hasOwnProperty(on_going_key)){window.onGoingProducts[on_going_key].live_date=on_going_var.live_date;window.onGoingProducts[on_going_key].timer=on_going_var.timer}else{window.onGoingProducts[on_going_key]=on_going_var}})}if(typeof response.data!=="undefined"&&typeof response.data.upcoming_products!=="undefined"){$.each(response.data.upcoming_products,function(on_going_key,on_going_var){window.upcomingProducts[on_going_key]=on_going_var})}if(typeof response.data!=="undefined"&&typeof response.data.auction_search_sort!=="undefined"){$("#auction_product_search_sort").html(response.data.auction_search_sort);$("#auction_product_search_sort").show()}if(typeof response.data!=="undefined"&&typeof response.data.auction_products!=="undefined"){$("#auction_product_content").html(response.data.auction_products)}if(typeof response.data!=="undefined"&&typeof response.data.auction_pagination!=="undefined"){$("#auction_product_pagination").html(response.data.auction_pagination)}$("#auction_product_sort").prop("disabled",false);$("#auction_product_category").prop("disabled",false);$("#auction_product_search_input").prop("disabled",false);$("#auction_product_limit").prop("disabled",false);if(window.connectionEstablished){emitOnGoingCheckOnVisibleProducts()}updateRelativeDateFields();updateProductDateFields();setUpAuctionProductListeners()}function parseRaffleItemResponseData(response){updateUserTokenFromResponse(response);if(typeof response.data!=="undefined"&&typeof response.data.upcoming_raffles!=="undefined"){$.each(response.data.upcoming_raffles,function(on_going_key,on_going_var){window.upcomingRaffles[on_going_key]=on_going_var})}if(typeof response.data!=="undefined"&&typeof response.data.raffle_search_sort!=="undefined"){$("#raffle_item_search_sort").html(response.data.raffle_search_sort);$("#raffle_item_search_sort").show()}if(typeof response.data!=="undefined"&&typeof response.data.raffle_items!=="undefined"){$("#raffle_item_content").html(response.data.raffle_items)}if(typeof response.data!=="undefined"&&typeof response.data.raffle_pagination!=="undefined"){$("#raffle_item_pagination").html(response.data.raffle_pagination)}$("#raffle_item_sort").prop("disabled",false);$("#raffle_item_category").prop("disabled",false);$("#raffle_item_search_input").prop("disabled",false);$("#raffle_item_limit").prop("disabled",false);if(window.connectionEstablished){emitOnGoingCheckOnVisibleProducts()}updateRelativeDateFields();updateProductDateFields();setUpRaffleItemListeners()}function parseWatchlistProductResponseData(response){updateUserTokenFromResponse(response);if(typeof response.data!=="undefined"&&typeof response.data.on_going_products!=="undefined"){$.each(response.data.on_going_products,function(on_going_key,on_going_var){if(window.onGoingProducts.hasOwnProperty(on_going_key)){window.onGoingProducts[on_going_key].live_date=on_going_var.live_date;window.onGoingProducts[on_going_key].timer=on_going_var.timer}else{window.onGoingProducts[on_going_key]=on_going_var}})}if(typeof response.data!=="undefined"&&typeof response.data.upcoming_products!=="undefined"){$.each(response.data.upcoming_products,function(on_going_key,on_going_var){window.upcomingProducts[on_going_key]=on_going_var})}if(typeof response.data!=="undefined"&&typeof response.data.watchlist_search_sort!=="undefined"){$("#watchlist_product_search_sort").html(response.data.watchlist_search_sort);$("#watchlist_product_search_sort").show()}if(typeof response.data!=="undefined"&&typeof response.data.watchlist_products!=="undefined"){$("#watchlist_product_content").html(response.data.watchlist_products)}if(typeof response.data!=="undefined"&&typeof response.data.watchlist_pagination!=="undefined"){$("#watchlist_product_pagination").html(response.data.watchlist_pagination)}$("#watchlist_product_sort").prop("disabled",false);$("#watchlist_product_category").prop("disabled",false);$("#watchlist_product_search_input").prop("disabled",false);$("#watchlist_product_limit").prop("disabled",false);if(window.connectionEstablished){emitOnGoingCheckOnVisibleProducts()}updateRelativeDateFields();updateProductDateFields();setUpWatchlistProductListeners()}function beforeHomePageRequest(){$("#featured_auction_raffle_toggle").html("");$("#home_page_product_sort").prop("disabled",true);$("#home_page_product_category").prop("disabled",true);$("#home_page_product_search_input").prop("disabled",true);$("#home_page_product_cards").prepend($("#loading_overlay_content").html());$("#home_product_limit").prop("disabled",true);if($("#product_page_watchlist_items").is(":visible")){$("#product_page_watchlist_items").prepend($("#loading_overlay_content").html());$("select[name=wl_sort]").prop("disabled",true)}}function beforeHomePageRaffleRequest(){$("#featured_auction_raffle_toggle").html("");$("#home_page_raffle_sort").prop("disabled",true);$("#home_page_raffle_category").prop("disabled",true);$("#home_page_raffle_search_input").prop("disabled",true);$("#home_page_product_cards").prepend($("#loading_overlay_content").html())}function beforeAuctionProductRequest(){$("#auction_product_sort").prop("disabled",true);$("#auction_product_category").prop("disabled",true);$("#auction_product_search_input").prop("disabled",true);$("#auction_product_limit").prop("disabled",true);$("#auction_product_content").prepend($("#loading_overlay_content").html())}function beforeRaffleItemRequest(){$("#raffle_item_sort").prop("disabled",true);$("#raffle_item_category").prop("disabled",true);$("#raffle_item_search_input").prop("disabled",true);$("#raffle_item_limit").prop("disabled",true);$("#raffle_item_content").prepend($("#loading_overlay_content").html())}function beforeWatchlistProductRequest(){$("#watchlist_product_sort").prop("disabled",true);$("#watchlist_product_category").prop("disabled",true);$("#watchlist_product_search_input").prop("disabled",true);$("#watchlist_product_limit").prop("disabled",true);$("#watchlist_product_content").prepend($("#loading_overlay_content").html())}function setUpHomePageListeners(){if($("#home_page_product_limit")[0]){$("#home_page_product_limit").off("change").on("change",function(){loadNewHomeProducts($("#home_page_product_sort").val(),$("#home_page_product_search_input").val(),$("#home_page_product_category").val(),$("select[name=wl_sort]").val(),$(this).val(),1)})}if($(".pagination .page_btn")[0]||$(".pagination .page_btn_list")[0]){$(".pagination .page_btn, .pagination .page_btn_list").off("click").on("click",function(e){e.preventDefault();loadNewHomeProducts($("#home_page_product_sort").val(),$("#home_page_product_search_input").val(),$("#home_page_product_category").val(),$("select[name=wl_sort]").val(),$("#home_page_product_limit").val(),$(this).data("page"))})}if($("#home_page_product_sort")[0]){$("#home_page_product_sort").off("change").on("change",function(){loadNewHomeProducts($(this).val(),$("#home_page_product_search_input").val(),$("#home_page_product_category").val(),$("select[name=wl_sort]").val(),$("#home_page_product_limit").val(),1)})}if($("#home_page_product_category")[0]){$("#home_page_product_category").off("change").on("change",function(){loadNewHomeProducts($("#home_page_product_sort").val(),$("#home_page_product_search_input").val(),$(this).val(),$("select[name=wl_sort]").val(),$("#home_page_product_limit").val(),1)})}if($("#home_page_product_search")[0]){$("#home_page_product_search").off("click").on("click",function(){loadNewHomeProducts($("#home_page_product_sort").val(),$("#home_page_product_search_input").val(),$("#home_page_product_category").val(),$("select[name=wl_sort]").val(),$("#home_page_product_limit").val(),1)})}if($("select[name=wl_sort]")[0]){$("select[name=wl_sort]").off("change").on("change",function(){loadNewHomeProducts($("#home_page_product_sort").val(),$("#home_page_product_search_input").val(),$("#home_page_product_category").val(),$(this).val(),$("#home_page_product_limit").val(),1)})}if($("#load_featured_raffle_search_sort")[0]){$("#load_featured_raffle_search_sort").off("click").on("click",function(){loadNewHomeRaffles("","","")})}if(document.querySelector(".toggleDisplay")&&typeof toggleDivDisplay==="function"){document.querySelector(".toggleDisplay").addEventListener("click",toggleDivDisplay)}enableBtns()}function setUpHomePageRaffleListeners(){if($("#home_page_raffle_sort")[0]){$("#home_page_raffle_sort").off("change").on("change",function(){loadNewHomeRaffles($(this).val(),$("#home_page_raffle_search_input").val(),$("#home_page_raffle_category").val())})}if($("#home_page_raffle_category")[0]){$("#home_page_raffle_category").off("change").on("change",function(){loadNewHomeRaffles($("#home_page_raffle_sort").val(),$("#home_page_raffle_search_input").val(),$(this).val())})}if($("#home_page_raffle_search")[0]){$("#home_page_raffle_search").off("click").on("click",function(){loadNewHomeRaffles($("#home_page_raffle_sort").val(),$("#home_page_raffle_search_input").val(),$("#home_page_raffle_category").val())})}if($("#load_featured_product_search_sort")[0]){$("#load_featured_product_search_sort").off("click").on("click",function(){loadNewHomeProducts("","","","")})}if(document.querySelector(".toggleDisplay")&&typeof toggleDivDisplay==="function"){document.querySelector(".toggleDisplay").addEventListener("click",toggleDivDisplay)}enableBtns()}function setUpAuctionProductListeners(){if($("#auction_product_limit")[0]){$("#auction_product_limit").off("change").on("change",function(){loadAuctionProducts($("#auction_product_sort").val(),$("#auction_product_search_input").val(),$("#auction_product_category").val(),$(this).val(),1)})}if($("#auction_product_sort")[0]){$("#auction_product_sort").off("change").on("change",function(){loadAuctionProducts($(this).val(),$("#auction_product_search_input").val(),$("#auction_product_category").val(),$("#auction_product_limit").val(),1)})}if($("#auction_product_category")[0]){$("#auction_product_category").off("change").on("change",function(){loadAuctionProducts($("#auction_product_sort").val(),$("#auction_product_search_input").val(),$(this).val(),$("#auction_product_limit").val(),1)})}if($("#auction_product_search")[0]){$("#auction_product_search").off("click").on("click",function(){loadAuctionProducts($("#auction_product_sort").val(),$("#auction_product_search_input").val(),$("#auction_product_category").val(),$("#auction_product_limit").val(),1)})}if(document.querySelector(".toggleDisplay")&&typeof toggleDivDisplay==="function"){document.querySelector(".toggleDisplay").addEventListener("click",toggleDivDisplay)}enableBtns()}function setUpRaffleItemListeners(){if($("#raffle_item_limit")[0]){$("#raffle_item_limit").off("change").on("change",function(){loadRaffleItems($("#raffle_item_sort").val(),$("#raffle_item_search_input").val(),$("#raffle_item_category").val(),$(this).val(),1)})}if($("#raffle_item_sort")[0]){$("#raffle_item_sort").off("change").on("change",function(){loadRaffleItems($(this).val(),$("#raffle_item_search_input").val(),$("#raffle_item_category").val(),$("#raffle_item_limit").val(),1)})}if($("#raffle_item_category")[0]){$("#raffle_item_category").off("change").on("change",function(){loadRaffleItems($("#raffle_item_sort").val(),$("#raffle_item_search_input").val(),$(this).val(),$("#raffle_item_limit").val(),1)})}if($("#raffle_item_search")[0]){$("#raffle_item_search").off("click").on("click",function(){loadRaffleItems($("#raffle_item_sort").val(),$("#raffle_item_search_input").val(),$("#raffle_item_category").val(),$("#raffle_item_limit").val(),1)})}if(document.querySelector(".toggleDisplay")&&typeof toggleDivDisplay==="function"){document.querySelector(".toggleDisplay").addEventListener("click",toggleDivDisplay)}enableBtns()}function setUpWatchlistProductListeners(){if($("#watchlist_product_limit")[0]){$("#watchlist_product_limit").off("change").on("change",function(){loadWatchlistProducts($("#watchlist_product_sort").val(),$("#watchlist_product_search_input").val(),$("#watchlist_product_category").val(),$(this).val(),1)})}if($("#watchlist_product_sort")[0]){$("#watchlist_product_sort").off("change").on("change",function(){loadWatchlistProducts($(this).val(),$("#watchlist_product_search_input").val(),$("#watchlist_product_category").val(),$("#watchlist_product_limit").val(),1)})}if($("#watchlist_product_category")[0]){$("#watchlist_product_category").off("change").on("change",function(){loadWatchlistProducts($("#watchlist_product_sort").val(),$("#watchlist_product_search_input").val(),$(this).val(),$("#watchlist_product_limit").val(),1)})}if($("#watchlist_product_search")[0]){$("#watchlist_product_search").off("click").on("click",function(){loadWatchlistProducts($("#watchlist_product_sort").val(),$("#watchlist_product_search_input").val(),$("#watchlist_product_category").val(),$("#watchlist_product_limit").val(),1)})}if(document.querySelector(".toggleDisplay")&&typeof toggleDivDisplay==="function"){document.querySelector(".toggleDisplay").addEventListener("click",toggleDivDisplay)}enableBtns()}